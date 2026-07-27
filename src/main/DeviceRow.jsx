import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  IconButton,
  Tooltip,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Battery60Icon from '@mui/icons-material/Battery60';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import Battery20Icon from '@mui/icons-material/Battery20';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import ErrorIcon from '@mui/icons-material/Error';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { orange } from '@mui/material/colors';
import { devicesActions } from '../store';
import {
  formatAlarm,
  formatBoolean,
  formatPercentage,
  formatStatus,
  getStatusColor,
} from '../common/util/formatter';
import { useTranslation } from '../common/components/LocalizationProvider';
import { mapIconKey, mapIcons } from '../map/core/preloadImages';
import { useAdministrator } from '../common/util/permissions';
import EngineIcon from '../resources/images/data/engine.svg?react';
import { useAttributePreference } from '../common/util/preferences';
import GeofencesValue from '../common/components/GeofencesValue';
import DriverValue from '../common/components/DriverValue';
import MotionBar from './components/MotionBar';

dayjs.extend(relativeTime);

const useStyles = makeStyles()((theme) => ({
  icon: {
    width: '25px',
    height: '25px',
    filter: 'brightness(0) invert(1)',
  },
  batteryText: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
    lineHeight: '0.875rem',
  },
  success: {
    color: theme.palette.success.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  neutral: {
    color: theme.palette.neutral.main,
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
}));

const getAvatarColor = (item, position) => {
  if (item.status !== 'online') return '#9e9e9e';
  const ignition = position?.attributes?.ignition;
  const motion = position?.attributes?.motion;
  if (!ignition) return '#f44336';
  if (!motion) return orange[700];
  return '#4caf50';
};

const DeviceRow = ({ devices, index, style }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const t = useTranslation();

  const admin = useAdministrator();
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);

  const item = devices[index];
  const position = useSelector((state) => state.session.positions[item.id]);

  const devicePrimary = useAttributePreference('devicePrimary', 'name');
  const deviceSecondary = useAttributePreference('deviceSecondary', '');

  const resolveFieldValue = (field) => {
    if (field === 'geofenceIds') {
      const geofenceIds = position?.geofenceIds;
      return geofenceIds?.length ? <GeofencesValue geofenceIds={geofenceIds} /> : null;
    }
    if (field === 'driverUniqueId') {
      const driverUniqueId = position?.attributes?.driverUniqueId;
      return driverUniqueId ? <DriverValue driverUniqueId={driverUniqueId} /> : null;
    }
    if (field === 'motion') {
      return <MotionBar deviceId={item.id} />;
    }
    return item[field];
  };

  const primaryValue = resolveFieldValue(devicePrimary);
  const secondaryValue = resolveFieldValue(deviceSecondary);

  const secondaryText = () => {
    let status;
    if (item.status === 'online' || !item.lastUpdate) {
      status = formatStatus(item.status, t);
    } else {
      status = dayjs(item.lastUpdate).fromNow();
    }
    return (
      <>
        {secondaryValue && (
          <>
            {secondaryValue}
            {' \u2022 '}
          </>
        )}
        <span className={classes[getStatusColor(item.status)]}>{status}</span>
      </>
    );
  };

  return (
    <div style={style}>
      <ListItemButton
        key={item.id}
        onClick={() => dispatch(devicesActions.selectId(item.id))}
        disabled={!admin && item.disabled}
        selected={selectedDeviceId === item.id}
        className={selectedDeviceId === item.id ? classes.selected : null}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: getAvatarColor(item, position) }}>
            <img className={classes.icon} src={mapIcons[mapIconKey(item.category)]} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={primaryValue}
          secondary={secondaryText()}
          slots={{
            primary: Typography,
            secondary: Typography,
          }}
          slotProps={{
            primary: { noWrap: true },
            secondary: { noWrap: true },
          }}
        />
        {position && (
          <>
            {position.attributes.hasOwnProperty('alarm') && (
              <Tooltip title={`${t('eventAlarm')}: ${formatAlarm(position.attributes.alarm, t)}`}>
                <IconButton size="small">
                  <ErrorIcon fontSize="small" className={classes.error} />
                </IconButton>
              </Tooltip>
            )}

            {position.attributes.hasOwnProperty('ignition') && (
              <Tooltip
                title={`${t('positionIgnition')}: ${formatBoolean(position.attributes.ignition, t)}`}
              >
                <IconButton size="small">
                  {position.attributes.ignition && position.attributes.motion ? (
                    <EngineIcon width={20} height={20} className={classes.success} />
                  ) : position.attributes.ignition && !position.attributes.motion ? (
                    <EngineIcon width={20} height={20} style={{ color: orange[700] }} />
                  ) : (
                    <EngineIcon width={20} height={20} className={classes.neutral} />
                  )}
                </IconButton>
              </Tooltip>
            )}

            {/* ============================================
                OPCION A: CarRentalIcon (ACTIVA)
                out1 = true  ? Motor Cortado (rojo)
                out1 = false ? Motor Habilitado (verde)
                Para invertir: intercambiar error/success
            ============================================ */}
            {position.attributes.hasOwnProperty('out1') && (
              <Tooltip title={`Motor: ${position.attributes.out1 ? 'Cortado' : 'Habilitado'}`}>
                <IconButton size="small">
                  {position.attributes.out1 ? (
                    <CarRentalIcon fontSize="small" className={classes.error} />
                  ) : (
                    <CarRentalIcon fontSize="small" className={classes.success} />
                  )}
                </IconButton>
              </Tooltip>
            )}

            {/* ============================================
                OPCION B: Candado (COMENTADA)
                out1 = true  ? Motor Cortado (candado cerrado, rojo)
                out1 = false ? Motor Habilitado (candado abierto, verde)
                Para activar: descomentar este bloque y comentar OPCION A
            ============================================
            {position.attributes.hasOwnProperty('out1') && (
              <Tooltip title={`Motor: ${position.attributes.out1 ? 'Cortado' : 'Habilitado'}`}>
                <IconButton size="small">
                  {position.attributes.out1 ? (
                    <LockIcon fontSize="small" className={classes.error} />
                  ) : (
                    <LockOpenIcon fontSize="small" className={classes.success} />
                  )}
                </IconButton>
              </Tooltip>
            )}
            */}


		{position.attributes.hasOwnProperty('output') && (
  <Tooltip title={`Motor: ${position.attributes.output ? 'Cortado' : 'Habilitado'}`}>
    <IconButton size="small">
      {position.attributes.output ? (
        <CarRentalIcon fontSize="small" className={classes.error} />
      ) : (
        <CarRentalIcon fontSize="small" className={classes.success} />
      )}
    </IconButton>
  </Tooltip>
)}








	{position.attributes.hasOwnProperty('in2') && (
  // MeetingRoomIcon: lee el estado de la Entrada 2 (in2)
  // in2 = true  ? Puerta Abierta (verde)
  // in2 = false ? Puerta Cerrada (rojo)
  <Tooltip title={`Puerta: ${position.attributes.in2 ? 'Abierta' : 'Cerrada'}`}>
    <IconButton size="small">
      {position.attributes.in2 ? (
        <MeetingRoomIcon fontSize="small" className={classes.success} />
      ) : (
        <MeetingRoomIcon fontSize="small" className={classes.error} />
      )}
    </IconButton>
  </Tooltip>
)}






            {position.attributes.hasOwnProperty('batteryLevel') && (
              <Tooltip
                title={`${t('positionBatteryLevel')}: ${formatPercentage(position.attributes.batteryLevel)}`}
              >
                <IconButton size="small">
                  {(position.attributes.batteryLevel > 70 &&
                    (position.attributes.charge ? (
                      <BatteryChargingFullIcon fontSize="small" className={classes.success} />
                    ) : (
                      <BatteryFullIcon fontSize="small" className={classes.success} />
                    ))) ||
                    (position.attributes.batteryLevel > 30 &&
                      (position.attributes.charge ? (
                        <BatteryCharging60Icon fontSize="small" className={classes.warning} />
                      ) : (
                        <Battery60Icon fontSize="small" className={classes.warning} />
                      ))) ||
                    (position.attributes.charge ? (
                      <BatteryCharging20Icon fontSize="small" className={classes.error} />
                    ) : (
                      <Battery20Icon fontSize="small" className={classes.error} />
                    ))}
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
      </ListItemButton>
    </div>
  );
};

export default DeviceRow;
