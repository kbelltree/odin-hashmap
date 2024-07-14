class HashMap {
    constructor(capacity = 16, loadFactor = 0.75){
        // track initial capacity for clear method
        this.initialCapacity = capacity; 
        this.capacity = capacity; 
        this.loadFactor = loadFactor; 
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.dataCount = 0;
    }

    hash(key) {
        if (typeof key !== "string" || key === ""){
            throw new Error("Only non-empty strings are accepted as key");
        }
        let hashCode = 0;       
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }    
        console.log(`Hash for key "${key}" is ${hashCode}`);
        return hashCode;
      } 
    
    set(key, value) {
        const index = this.hash(key); 
        console.log(`Set: Index for key "${key}" is ${index}`)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }  
        const targetBucket = this.buckets[index];

        // overwrite with the new value if the key already exists
        for (let data of targetBucket) {
            if(data[0] === key){
                data[1]= value;
                return; 
            } 
        }
        console.log(`Updated key "${key}" with value "${value}" at index ${index} data count is ${this.dataCount}`);
        // otherwise add the new key value data
        targetBucket.push([key, value]);
         
        // expand the capacity if the buckets are nearly full
        const threshold = this.capacity * this.loadFactor; 
        if (threshold <= this.dataCount){
            console.log(`Threshold is now "${threshold}" triggered by key "${key}"`);
            this.buckets = this.expandCapacity();
        }       

        this.dataCount++;  
        console.log(`Added key "${key}" with value "${value}" at index ${index} data count is ${this.dataCount}`);
    }

    get(key){
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        const targetBucket = this.buckets[index];
        for (let data of targetBucket) {
            if(data[0] === key) {
                console.log(`Updated key "${key}" with value "${data[1]}" at index ${index}`);
                return data[1]; 
            }   
        }
        console.log(`Key "${key}" not found at index ${index}`);
        return null;  
    }

    has(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        const targetBucket = this.buckets[index];
        for (let data of targetBucket) {
            if(data[0] === key) {
                return true; 
            }   
        }
        return false; 
    }

    remove(key){
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        const targetBucket = this.buckets[index];
        for (let i = 0; i < targetBucket.length; i++){
            if(targetBucket[i][0] === key){
                targetBucket.splice(i, 1);
                this.dataCount--;
                return true; 
            }
        }
        return false; 
    }

    length() {
        let counter = 0; 
        for (let i = 0; i < this.buckets.length; i++){
            counter += this.buckets[i].length; 
        }
        return counter;
    }

    clear() {
        this.capacity = this.initialCapacity; 
        this.buckets = Array.from({ length: this.initialCapacity }, () => []);
        this.dataCount = 0;
    }

    keys() {
        let array = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach(data => {
                array.push(data[0]);
            });
        })
        return array; 
    }

    values(){
        let array = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach(data => {
                array.push(data[1]);
            });
        })
        return array; 
    }

    entries() {
        let array = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach((data) => {
                array.push(data);
            });
        })
        return array; 
    }

    // grow capacity to hold total data count
    expandCapacity() {
        this.capacity *= 2; 
        let newBuckets = Array.from({ length: this.capacity }, () => []);
        const deHashedData = this.entries();
        
        // Rehash each data and store in the new buckets
        deHashedData.forEach((data) => {
            let index = this.hash(data[0]);
            console.log(`Expanded: Added key "${data[0]}" with value "${data[1]}" at index ${index}`);       
            newBuckets[index].push(data); 
        })
        return newBuckets; 
    }
}

module.exports = { HashMap };