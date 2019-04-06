let defaultCity = '拉萨';
try {
    // if(localStorage.getItem('city')){
    if(localStorage.city){
        // defaultCity = localStorage.getItem('city')
        // 可以直接这么写 
        defaultCity = localStorage.city
    }
} catch (error) {
    defaultCity = '拉萨';
}

export default {
    city: defaultCity
}
  