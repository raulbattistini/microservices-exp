const cache: {
  [key: string]: string;
} = {};

const accessEnv = (key: string, defaultValue: string) =>{
   if(!(key in process.env) || typeof process.env[key] === "undefined"){
      if(defaultValue) return defaultValue;
      throw new Error(`${key} not found in process.env!`);
   }
   if (!(key in cache)){
      cache[key] = process.env[key] as string;
   }

   return cache[key];
}

export default accessEnv