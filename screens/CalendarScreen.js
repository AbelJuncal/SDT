import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['gl'] = {
    monthNames: [
      'Xaneiro',
      'Febreiro',
      'Marzo',
      'Abril',
      'Maio',
      'Xuño',
      'Xullo',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Decembro'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mer.', 'Xov.', 'Ven.', 'Sab.'],
    today: "Agora"
  };

  LocaleConfig.defaultLocale = 'gl';

const CalendarScreen = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          current={'2025-05-03'}
          onDayPress={day => {
            console.log('selected day', day);
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, marked: true, selectedColor: 'blue' }
          }}
        />
  
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Convocatoria seguinte entrenamento" onPress={() => console.log('Aceptar')} />
          </View>
          <View style={styles.button}>
            <Button title="Convocatoria seguinte partido" onPress={() => console.log('Cancelar')} />
          </View>
        </View>
      </View>
    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
    },
    calendar: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      backgroundColor: '#ffffff',
      height: 350,
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      flex: 1,
      marginHorizontal: 10,
    },
  });
