# Texas Hold'em Poker (JavaScript)_Moreno Ulises

Solución de proyecto en JavaScript , me ayudo a entender mejor cómo funciona la lógica detrás del Texas Hold'em Poker. El objetivo fue generar una mano aleatoria (2 cartas del jugador + 5 comunitarias), y con eso, evaluar cuál es la mejor combinación posible que se puede formar entre esas cartas.

Está hecho con un enfoque básico pero funcional, y me sirvió para aprender cómo analizar patrones de cartas como pares, escaleras, flush, etc., usando funciones simples y bien separadas.

---

## ¿Qué hace este proyecto?

- Crea un mazo completo de 52 cartas con sus palos y rangos.
- Revuelve el mazo aleatoriamente.
- Reparte dos cartas al jugador y cinco cartas comunitarias.
- Evalúa la mejor combinación posible (como poker, color, full house, etc).
- Muestra todo en la terminal.

---

## Estructura del Código

### Generación y reparto de cartas

- `generateDeck()`: crea un array con las 52 cartas.
- `shuffleDeck(deck)`: revuelve el mazo de forma aleatoria.
- `dealCards(deck)`: reparte 2 cartas para el jugador y 5 para la mesa.

### Evaluación de la mano

Para saber qué combinación tienes, creé funciones separadas para detectar cada tipo:

- `isPair()`, `isTwoPair()`, `isThreeOfAKind()`, `isFourOfAKind()`: cuentan repeticiones de rangos.
- `isFullHouse()`: detecta si hay 3 iguales y un par.
- `hasFlush()`: verifica si hay 5 cartas del mismo palo.
- `hasStraight()`: verifica si hay 5 cartas seguidas.
- `hasStraightFlush()`: combina escalera y flush.
- `dealerCheck()`: función central que coordina las anteriores y devuelve el nombre de la mejor jugada encontrada.

---

## Ejemplo de salida en consola

```bash
Texas Hold'em Game
Player's Hand: [ '9♣', '9♦' ]
Community Cards: [ 'J♣', '9♠', '4♦', '2♥', 'K♣' ]
Hand Value: Three of a Kind
```

---

## Conclusiones

Este proyecto me ayudó a entender cómo estructurar condicionales, trabajar con conteo de elementos (como pares) y aplicar lógica para detectar patrones como escaleras y colores.  

---

## Cómo correrlo

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Guarda el código en un archivo `holdem.js`
3. En la terminal, corre:

```bash
node holdem.js
```

---

## Autor

Creado por **Ulises Moreno** 

---
