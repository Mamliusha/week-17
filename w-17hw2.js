class Transport
{
constructor(type, price, brand, image){
this.type = type;
this.price = price;
this.brand = brand;
this.image = image
}

getInfo(){
    return `${this.type}:${this.brand}`
}
getPrice(){
    return `Price : ${this.price} KZT`
}

}

class Car extends Transport {
    getDoorsCount(doorsCount) {      
			this.doorsCount = doorsCount;
      return `Number of doors: ${this.doorsCount}`;
    }
  }

  class Bike extends Transport {
    getMaxSpeed(maxSpeed) {
			     this.maxSpeed = maxSpeed;
      return `Max speed: ${this.maxSpeed} km/h`;
    }
  }


	const Audi = new Car ('car', 4300000, "Audi", 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg')
	document.getElementById("carInfo").innerHTML =  Audi.getInfo();
	document.getElementById("carPrice").innerHTML =  Audi.getPrice();
	document.getElementById("carDoors").innerHTML =  Audi.getDoorsCount(4);
	document.getElementById("carImage").src = Audi.image
	console.log(Audi);

    
    const Mercedes = new Car ('car', 2800000, 'Mercedez-Benz', 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/116201/new-c-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75'
    )
	document.getElementById("carInfo2").innerHTML =  Mercedes.getInfo();
	document.getElementById("carPrice2").innerHTML =  Mercedes.getPrice();
	document.getElementById("carDoors2").innerHTML =  Mercedes.getDoorsCount(4);
	document.getElementById("carImage2").src = Mercedes.image
	console.log(Mercedes);

    const Harley1 = new Bike ('bike', 1300000, 'Harley-Davidson', '//www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg')
	document.getElementById("bikeInfo").innerHTML =  Harley1.getInfo();
	document.getElementById("bikePrice").innerHTML =  Harley1.getPrice();
	document.getElementById("bikeSpeed").innerHTML =  Harley1.getMaxSpeed(210);
	document.getElementById("bikeImage").src = Harley1.image
	console.log(Harley1);

    const Harley2 = new Bike ('bike', 1400000, 'Harley-Davidson', 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png')

	document.getElementById("bikeInfo2").innerHTML =  Harley2.getInfo();
	document.getElementById("bikePrice2").innerHTML =  Harley2.getPrice();
	document.getElementById("bikeSpeed2").innerHTML =  Harley2.getMaxSpeed(220);
	document.getElementById("bikeImage2").src = Harley2.image
	console.log(Harley2);