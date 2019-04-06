export default {
    ChangeCity(state,city){
      state.city = city;
      try {
        localStorage.setItem('city',city);
      } catch (error) {
          localStorage.city = '拉萨';
      }
    }
}