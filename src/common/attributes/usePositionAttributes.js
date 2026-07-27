import { useMemo } from 'react';

export default (t) =>
  useMemo(
    () => ({
      id: {
        name: t('deviceIdentifier'),
        type: 'number',
        property: true,
      },
      latitude: {
        name: t('positionLatitude'),
        type: 'number',
        property: true,
      },
      longitude: {
        name: t('positionLongitude'),
        type: 'number',
        property: true,
      },
      speed: {
        name: t('positionSpeed'),
        type: 'number',
        dataType: 'speed',
        property: true,
      },
      course: {
        name: t('positionCourse'),
        type: 'number',
        property: true,
      },
      altitude: {
        name: t('positionAltitude'),
        type: 'number',
        property: true,
      },
      accuracy: {
        name: t('positionAccuracy'),
        type: 'number',
        dataType: 'distance',
        property: true,
      },
      valid: {
        name: t('positionValid'),
        type: 'boolean',
        property: true,
      },
      protocol: {
        name: t('positionProtocol'),
        type: 'string',
        property: true,
      },
      address: {
        name: t('positionAddress'),
        type: 'string',
        property: true,
      },
      deviceTime: {
        name: t('positionDeviceTime'),
        type: 'string',
        property: true,
      },
      fixTime: {
        name: t('positionFixTime'),
        type: 'string',
        property: true,
      },
      serverTime: {
        name: t('positionServerTime'),
        type: 'string',
        property: true,
      },
      geofenceIds: {
        name: t('sharedGeofences'),
        property: true,
      },
      raw: {
        name: t('positionRaw'),
        type: 'string',
      },
      index: {
        name: t('positionIndex'),
        type: 'number',
      },
      hdop: {
        name: t('positionHdop'),
        type: 'number',
      },
      vdop: {
        name: t('positionVdop'),
        type: 'number',
      },
      pdop: {
        name: t('positionPdop'),
        type: 'number',
      },
      sat: {
        name: t('positionSat'),
        type: 'number',
      },
      satVisible: {
        name: t('positionSatVisible'),
        type: 'number',
      },
      rssi: {
        name: t('positionRssi'),
        type: 'number',
      },
      coolantTemp: {
        name: t('positionCoolantTemp'),
        type: 'number',
      },
      engineTemp: {
        name: t('positionEngineTemp'),
        type: 'number',
      },
      gps: {
        name: t('positionGps'),
        type: 'number',
      },
      roaming: {
        name: t('positionRoaming'),
        type: 'boolean',
      },
      event: {
        name: t('positionEvent'),
        type: 'string',
      },
      alarm: {
        name: t('positionAlarm'),
        type: 'string',
      },
      status: {
        name: t('positionStatus'),
        type: 'string',
      },
      odometer: {
        name: t('positionOdometer'),
        type: 'number',
        dataType: 'distance',
      },
      serviceOdometer: {
        name: t('positionServiceOdometer'),
        type: 'number',
        dataType: 'distance',
      },
      tripOdometer: {
        name: t('positionTripOdometer'),
        type: 'number',
        dataType: 'distance',
      },
      hours: {
        name: t('positionHours'),
        type: 'number',
        dataType: 'hours',
      },
      steps: {
        name: t('positionSteps'),
        type: 'number',
      },
      heartRate: {
        name: t('positionHeartRate'),
        type: 'number',
      },
      input: {
        name: t('positionInput'),
        type: 'number',
      },
      in1: {
        name: `${t('positionInput')} 1`,
        type: 'boolean',
      },
      in2: {
        name: `${t('positionInput')} 2`,
        type: 'boolean',
      },
      in3: {
        name: `${t('positionInput')} 3`,
        type: 'boolean',
      },
      in4: {
        name: `${t('positionInput')} 4`,
        type: 'boolean',
      },
      output: {
        name: t('positionOutput'),
        type: 'number',
      },
      //out1: {
      //  name: `${t('positionOutput')} 1`,
      //  type: 'boolean',
      //},
      out1: {
        name: `Control de motor`,
        type: 'boolean',
      },

      //out2: {
       // name: `${t('positionOutput')} 2`,
        //type: 'boolean',
      //},
      out2: {
        name: `Salida 2`,
        type: 'boolean',
      },

      out3: {
        name: `${t('positionOutput')} 3`,
        type: 'boolean',
      },
      out4: {
        name: `${t('positionOutput')} 4`,
        type: 'boolean',
      },
      power: {
        name: t('positionPower'),
        type: 'number',
        dataType: 'voltage',
      },
      battery: {
        name: t('positionBattery'),
        type: 'number',
        dataType: 'voltage',
      },
      batteryLevel: {
        name: t('positionBatteryLevel'),
        type: 'number',
        dataType: 'percentage',
      },
      fuel: {
        name: t('positionFuel'),
        type: 'number',
        dataType: 'volume',
      },
      fuelUsed: {
        name: t('positionFuelUsed'),
        type: 'number',
      },
      fuelConsumption: {
        name: t('positionFuelConsumption'),
        type: 'number',
      },
      versionFw: {
        name: t('positionVersionFw'),
        type: 'string',
      },
      versionHw: {
        name: t('positionVersionHw'),
        type: 'string',
      },
      type: {
        name: t('sharedType'),
        type: 'string',
      },
      ignition: {
        name: t('positionIgnition'),
        type: 'boolean',
      },
      flags: {
        name: t('positionFlags'),
        type: 'string',
      },
      charge: {
        name: t('positionCharge'),
        type: 'boolean',
      },
      ip: {
        name: t('positionIp'),
        type: 'string',
      },
      archive: {
        name: t('positionArchive'),
        type: 'boolean',
      },
      distance: {
        name: t('positionDistance'),
        type: 'number',
        dataType: 'distance',
      },
      totalDistance: {
        name: t('deviceTotalDistance'),
        type: 'number',
        dataType: 'distance',
      },
      rpm: {
        name: t('positionRpm'),
        type: 'number',
      },
      vin: {
        name: t('positionVin'),
        type: 'string',
      },
      approximate: {
        name: t('positionApproximate'),
        type: 'boolean',
      },
      throttle: {
        name: t('positionThrottle'),
        type: 'number',
      },
      motion: {
        name: t('positionMotion'),
        type: 'boolean',
      },
      armed: {
        name: t('positionArmed'),
        type: 'boolean',
      },
      geofence: {
        name: t('sharedGeofence'),
        type: 'string',
      },
      acceleration: {
        name: t('positionAcceleration'),
        type: 'number',
      },
      humidity: {
        name: t('positionHumidity'),
        type: 'number',
      },
      deviceTemp: {
        name: t('positionDeviceTemp'),
        type: 'number',
      },
      temp1: {
        name: `${t('positionTemp')} 1`,
        type: 'number',
      },
      temp2: {
        name: `${t('positionTemp')} 2`,
        type: 'number',
      },
      temp3: {
        name: `${t('positionTemp')} 3`,
        type: 'number',
      },
      temp4: {
        name: `${t('positionTemp')} 4`,
        type: 'number',
      },
      operator: {
        name: t('positionOperator'),
        type: 'string',
      },
      command: {
        name: t('deviceCommand'),
        type: 'string',
      },
      blocked: {
        name: t('positionBlocked'),
        type: 'boolean',
      },
      lock: {
        name: t('alarmLock'),
        type: 'boolean',
      },
      dtcs: {
        name: t('positionDtcs'),
        type: 'string',
      },
      obdSpeed: {
        name: t('positionObdSpeed'),
        type: 'number',
        dataType: 'speed',
      },
      obdOdometer: {
        name: t('positionObdOdometer'),
        type: 'number',
        dataType: 'distance',
      },
      result: {
        name: t('eventCommandResult'),
        type: 'string',
      },
      driverUniqueId: {
        name: t('sharedDriver'),
        type: 'string',
      },
      card: {
        name: t('positionCard'),
        type: 'string',
      },
      drivingTime: {
        name: t('positionDrivingTime'),
        type: 'number',
        dataType: 'hours',
      },
      color: {
        name: t('attributeColor'),
        type: 'string',
      },
      image: {
        name: t('positionImage'),
        type: 'string',
      },
      video: {
        name: t('positionVideo'),
        type: 'string',
      },
      audio: {
        name: t('positionAudio'),
        type: 'string',
      },
      speedLimit: {
        name: t('attributeSpeedLimit'),
        type: 'number',
        subtype: 'speed',
      },



	// --- GPS Istartek - Permanent I/O ---


       output: {
        name: `Control de motor`,
        type: 'boolean',
       },




      // --- Teltonika FMC003 / FMC130 - Permanent I/O ---
      io239: { name: 'Ignicion (IO)', type: 'boolean' },
      io240: { name: 'Movimiento (IO)', type: 'boolean' },
      io80:  { name: 'Modo de Datos', type: 'number' },
      io21:  { name: 'Señal GSM', type: 'number' },
      io200: { name: 'Modo Sleep', type: 'number' },
      io69:  { name: 'Estado GNSS', type: 'number' },
      io181: { name: 'GNSS PDOP', type: 'number' },
      io182: { name: 'GNSS HDOP', type: 'number' },
      io66:  { name: 'Voltaje Externo (V)', type: 'number', dataType: 'voltage' },
      io24:  { name: 'Velocidad GNSS', type: 'number', dataType: 'speed' },
      io205: { name: 'GSM Cell ID', type: 'number' },
      io206: { name: 'GSM Area Code', type: 'number' },
      io67:  { name: 'GNSS HDOP (raw)', type: 'number' },
      io68:  { name: 'GNSS PDOP (raw)', type: 'number' },
      io16:  { name: 'Odómetro Total (IO)', type: 'number', dataType: 'distance' },
      io41:  { name: 'Voltaje Total (mV)', type: 'number' },
      io9:   { name: 'Entrada Analógica 1', type: 'number' },
      io6:   { name: 'Voltaje Batería Interna (mV)', type: 'number' },
      io113: { name: 'Nivel Batería Interna (%)', type: 'number', dataType: 'percentage' },
      io12:  { name: 'Corriente de Carga (mA)', type: 'number' },
      io13:  { name: 'Estado de Carga', type: 'number' },
      io17:  { name: 'Corriente Batería (mA)', type: 'number' },
      io199: { name: 'Trip Odometro', type: 'number', dataType: 'distance' },
      io175: { name: 'Auto Geofence', type: 'number' },
      io252: { name: 'Detección Manipulación', type: 'number' },
      io253: { name: 'Eco Driving Score', type: 'number' },
      io254: { name: 'Tipo Eco Driving', type: 'number' },
      io255: { name: 'Valor Eco Driving', type: 'number' },
      io236: { name: 'Tiempo en Ralenti (s)', type: 'number' },
      io237: { name: 'Distancia en Ralenti', type: 'number', dataType: 'distance' },
      io246: { name: 'Tiempo de Trayecto (s)', type: 'number' },
      io247: { name: 'Distancia de Trayecto', type: 'number', dataType: 'distance' },
      io248: { name: 'Tiempo de Conduccion (s)', type: 'number' },
      io249: { name: 'Tiempo de Parada (s)', type: 'number' },
      io250: { name: 'Estado de Trayecto', type: 'number' },
      io251: { name: 'Deteccion Desconexion', type: 'number' },
      io256: { name: 'VIN (IO)', type: 'string' },
      io11:  { name: 'ICCID 1', type: 'string' },
      io14:  { name: 'ICCID 2', type: 'string' },
      io10:  { name: 'Numero SD', type: 'number' },
      io15:  { name: 'Eco Score', type: 'number' },
      io19:  { name: 'Angulo GNSS', type: 'number' },
      io385: { name: 'Garmin Conectado', type: 'boolean' },

      // --- Teltonika FMC003 / FMC130 - OBD Elements ---
      io31:  { name: 'OBD Temp. Refrigerante (°C)', type: 'number' },
      io32:  { name: 'OBD Torque Motor (%)', type: 'number' },
      io33:  { name: 'OBD Velocidad', type: 'number', dataType: 'speed' },
      io34:  { name: 'OBD Carga Motor (%)', type: 'number' },
      io35:  { name: 'OBD Nivel Combustible (%)', type: 'number' },
      io36:  { name: 'OBD RPM Motor', type: 'number' },
      io37:  { name: 'OBD Presion Combustible', type: 'number' },
      io38:  { name: 'OBD Posicion Acelerador (%)', type: 'number' },
      io39:  { name: 'OBD Voltaje Bateria', type: 'number', dataType: 'voltage' },
      io40:  { name: 'OBD Distancia con MIL activo', type: 'number', dataType: 'distance' },
      io42:  { name: 'OBD Consumo Combustible', type: 'number' },
      io43:  { name: 'OBD Numero de DTCs', type: 'number' },
      io44:  { name: 'OBD Control Modulo Potencia', type: 'number' },
      io45:  { name: 'OBD Presion Admision (kPa)', type: 'number' },
      io46:  { name: 'OBD Tiempo Encendido (s)', type: 'number' },
      io47:  { name: 'OBD Presion Atmosferica', type: 'number' },
      io48:  { name: 'OBD Temp. Aceite Motor (°C)', type: 'number' },
      io49:  { name: 'OBD Tiempo Ralenti (s)', type: 'number' },
      io50:  { name: 'OBD Carga Combustible Abs.', type: 'number' },
      io51:  { name: 'OBD Estado Motor', type: 'number' },
      io53:  { name: 'OBD Presion Escape', type: 'number' },
      io54:  { name: 'OBD Nivel Aceite (%)', type: 'number' },
      io55:  { name: 'OBD Presion Aceite', type: 'number' },
      io56:  { name: 'OBD Estado Bateria Hibrida', type: 'number' },
      io57:  { name: 'OBD Vida Bateria Hibrida (%)', type: 'number' },
      io58:  { name: 'OBD Temp. Aceite (°C)', type: 'number' },

      // --- Teltonika FMC003 - OBD OEM Elements ---
      io389: { name: 'OEM Odómetro Total (km)', type: 'number', dataType: 'distance' },
      io390: { name: 'OEM Nivel Combustible (L)', type: 'number' },
      io402: { name: 'OEM Dist. Prox. Servicio (km)', type: 'number', dataType: 'distance' },
      io410: { name: 'OEM Estado Carga Batería', type: 'number' },
      io411: { name: 'OEM Nivel Carga Bateria (%)', type: 'number', dataType: 'percentage' },

      // --- Teltonika FMC130 - Entradas/Salidas Digitales ---
      io1:   { name: 'Entrada Digital 1', type: 'boolean' },
      io2:   { name: 'Entrada Digital 2', type: 'boolean' },
      io3:   { name: 'Entrada Digital 3', type: 'boolean' },
      io4:   { name: 'Entrada Digital 4', type: 'boolean' },
      io179: { name: 'Salida Digital 1', type: 'boolean' },
      io180: { name: 'Salida Digital 2', type: 'boolean' },
      io178: { name: 'Entrada Analogica 1 (mV)', type: 'number' },
    }),
    [t],
  );
