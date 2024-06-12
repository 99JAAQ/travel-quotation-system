exports.getProfile = (req, res) => {
    // Simular datos del usuario
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      reservations: [
        { destination: 'Destino A', date: '2023-06-01' },
        { destination: 'Destino B', date: '2023-12-15' }
      ]
    };
    res.render('profile/profile', { user });
  };
  