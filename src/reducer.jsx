export default function reducer(state = {
    carModel : [
        {
          image: '/ModelY.jpg',
          name: 'Model Y',
          desc: 'With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.',
          price: 57940
        },
        {
          image: '/Model3.jpg',
          name: 'Model 3',
          desc: 'Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.',
          price: 41940
        },
        {
          image: '/ModelS.jpg',
          name: 'Model S',
          desc: 'Tesla designed Model S from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.',
          price: 93740
        },
        {
          image: '/ModelX.jpg',
          name: 'Model X',
          desc: 'Tesla designed Model X from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.',
          price: 108940
        }
      ],
    cart: {}
}, action) {
    switch (action.type) {
        case "Cart":
            return {
                ...state,
                cart: action.payload
            };
        case "Empty":
            return {
                ...state,
                cart: {}
            };
        default:
            return state;
    }
}