import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

import EnsaiosExtrasScreen from '../screens/EnsaiosExtrasScreen';
import HorariosAulasScreen from '../screens/HorariosAulasScreen';
import ProximasCompeticoesScreen from '../screens/ProximasCompeticoesScreen';
import PremiacoesScreen from '../screens/PremiacoesScreen';
import CursosExtrasScreen from '../screens/CursosExtrasScreen';
import HomeScreen from '../screens/HomeScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#56346d',
        },
        headerTintColor: '#fff',

        drawerStyle: {
          backgroundColor: '#2b1638',
          width: 260,
        },

        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#d8b4ff',

        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
      />       

      <Drawer.Screen
        name="Ensaios Extras"
        component={EnsaiosExtrasScreen}
      />

      <Drawer.Screen
        name="Horários das Aulas"
        component={HorariosAulasScreen}
      />

      <Drawer.Screen
        name="Próximas Competições"
        component={ProximasCompeticoesScreen}
      />

      <Drawer.Screen
        name="Premiações"
        component={PremiacoesScreen}
      />

      <Drawer.Screen
        name="Cursos Extras"
        component={CursosExtrasScreen}
      />
    </Drawer.Navigator>
  );
}