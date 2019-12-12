class Storage{
    static get = (key)=>{
        if(!key)throw("Storage.get expects a 'key' - 'key' can't be null");
        if(!localStorage.getItem(key)) return null;
        return localStorage.getItem(key);
    }

    static set = (key, value)=>{
        if(!key||!value){
            throw("Storag.set expects a 'key' and a 'value' - 'value' & 'key' can't be null");            
        }
        value = (typeof value=="string") ?  value : JSON.stringify(value);
        localStorage.setItem(key, value);
    }
}

export default Storage;