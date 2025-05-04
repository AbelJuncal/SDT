import React, { useState } from 'react';
import { View, Button, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Styles, Colors } from '../styles';

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
    monthNamesShort: ['Xan', 'Feb', 'Mar', 'Abr', 'Mai', 'Xuñ', 'Xul', 'Ago', 'Set.', 'Out', 'Nov', 'Dec'],
    dayNames: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mer.', 'Xov.', 'Ven.', 'Sab.'],
    today: "Agora"
  };

  LocaleConfig.defaultLocale = 'gl';

// const sendTelegramMessage = async (date, time) => {
//     const TOKEN = '7759168539:AAHKy4JK6BysQC3BEaXfjNLWGYCo-3ChWOU';
//     const CHAT_ID = '1161434961';
//     const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  
//     const formattedDate = date || 'Sin fecha';
//     const formattedTime = time ? `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}` : 'Sin hora';
  
//     const text = `📅 *Entrenamiento confirmado*\n\n🗓 Fecha: ${formattedDate}\n⏰ Hora: ${formattedTime}\n💪 Nos vemos en el campo!`;
  
//     await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
//     });
//   };


const selectFile = async () => {
    try {
        const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        });
        setFileUri(res.uri);  // Guardar la URI del archivo seleccionado
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
        console.log('Usuario canceló la selección del archivo');
        } else {
        throw err;
        }
    }
    };
  
  
const CalendarScreen = ({navigation}) => {
    const [selected, setSelected] = useState('');
    const [time, setTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
          setTime(selectedDate);
        }
      };
    
      const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    

    return (
        <View style={Styles.container}>
        <Calendar
          style={Styles.calendar}
          theme={{
            backgroundColor: '#000',
            calendarBackground: '#000',
            textSectionTitleColor: '#000',
            selectedDayBackgroundColor: '#FFCE33',
            selectedDayTextColor: '#FFFF',
            todayTextColor: '#FFFF',
            dayTextColor: '#FFFF',
            textDisabledColor: '#000',
            monthTextColor: '#FFFF',
            weekdayTextColor: '#000',
            headerTextColor: '#000',
            arrowColor: '#FFCE33',
            disabledArrowColor: '#FFCE33',
            monthTextColor: '#FFFF',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            selectedDotColor: '#FFCE33',
            selectedDayBackgroundColor: '#FFCE33',
            selectedDayTextColor: '#FFCE33',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          current={'2025-05-03'}
          onDayPress={day => {
            console.log('selected day', day);
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, marked: true, selectedColor: 'blue' }
          }}
        />

        <Button title="Seleccionar hora" color={Colors.primary} onPress={() => setShowPicker(true)} />

        {showPicker && (
        <DateTimePicker
            value={time}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
        />
        )}
  
        <View>
        <View style={Styles.button}>
          <Button
            title="Convocatoria seguinte entrenamento"
            color={Colors.primary}
            onPress={() => navigation.navigate('FootballSquad',{ tipoConvocatoria: 'entrenamiento' , time})}
          />
        </View>
        <View style={Styles.button}>
          <Button
            title="Convocatoria seguinte partido"
            color={Colors.primary}
            onPress={() => navigation.navigate('FootballSquad',{ tipoConvocatoria: 'partido' , time})}
          />
        </View>
      </View>
      </View>
    );
}

export default CalendarScreen;
