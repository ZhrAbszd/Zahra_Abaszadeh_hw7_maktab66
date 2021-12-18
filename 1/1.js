function SoftEngineeringClass(className, classUnit, classCapacity) {
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
}
let result1 = new SoftEngineeringClass('softEngineering', 3, 50)
console.log(result1); 
// softEngineeringClass {className: 'softEngineering', classUnit: 3, classCapacity: 50}


function NetworkClass(className, classUnit, classCapacity, project) {
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.project = project
}
let result2 = new NetworkClass('network', 3, 30, true)
console.log(result2); 
// NetworkClass {className: 'network', classUnit: 3, classCapacity: 30, project: true}



