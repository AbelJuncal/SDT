// styles/index.js

export const Colors = {
  primary: '#000',
  secondary: '#000',
  background: '#FFCE33',
  text: '#333',
  buttonText: '#fff',
  border: '#ddd',
};

export const Styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.buttonText,
  },
  footer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: Colors.buttonText,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 12,
  },
  // button: {
  //   padding: 10,
  //   borderWidth: 2,           // Grosor del borde
  //   borderColor: 'white',     // Color del borde blanco
  //   borderRadius: 5,          // Bordes redondeados (opcional)
  //   backgroundColor: 'black', // Fondo negro, por ejemplo
  //   alignItems: 'center',     // Centrar el texto horizontalmente
  // },
  // buttonText: {
  //     color: 'white',
  //     fontSize: 16,
  // },
};
