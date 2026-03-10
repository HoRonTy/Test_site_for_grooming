import React from 'react'
import './App.css'

function App() {
  const services = [
    { id: 1, name: 'Стрижка собаки', price: '1500 ₽', image: '/placeholder-dog.jpg' },
    { id: 2, name: 'Гигиена кота', price: '1200 ₽', image: '/placeholder-dog.jpg' },
    { id: 3, name: 'Комплекс SPA', price: '2500 ₽', image: '/placeholder-dog.jpg' },
    { id: 4, name: 'Стрижка когтей', price: '500 ₽', image: '/placeholder-dog.jpg' },
    { id: 5, name: 'Чистка ушей', price: '300 ₽', image: '/placeholder-dog.jpg' },
    { id: 6, name: 'Экспресс-линька', price: '2000 ₽', image: '/placeholder-dog.jpg' }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>🐾 Груминг-салон "Лапки"</h1>
        <p>Забота о ваших питомцах с любовью</p>
      </header>

      <main>
        <section className="services">
          <h2>Наши услуги</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <span className="price">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="address">
          <h2>Как нас найти</h2>
          <div className="address-card">
            <p>📍 ул. Пушкина, д. 10</p>
            <p>🚇 м. Парк Культуры (5 мин пешком)</p>
            <p>🕒 Ежедневно с 10:00 до 20:00</p>
            <p>📞 +7 (999) 123-45-67</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Груминг-салон "Лапки". Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App
