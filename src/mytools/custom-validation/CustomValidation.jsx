

export const StringValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const dangerousPatterns = [
          /[`]/,          // backtick
          /<script>/i,    // script tags
          /<\/?\w+>/,     // any HTML tag
          /on\w+=/,       // inline JS events like onclick=
        ];

        for (let pattern of dangerousPatterns) {
          if (pattern.test(v)) {
            return resolve("Invalid or dangerous characters detected");
          }
        }

        resolve(true); // passed all checks
      }, 300)
    );
  },
};

export const DangerousContentCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const dangerousPatterns = [
          /[`'"<>]/,          // backtick
          /<script>/i,    // script tags
          /<\/?\w+>/,     // any HTML tag
          /on\w+=/,       // inline JS events like onclick=
        ];

        for (let pattern of dangerousPatterns) {
          if (pattern.test(v)) {
            return resolve("Invalid or dangerous characters detected");
          }
        }

        resolve(true); // passed all checks
      }, 300)
    );
  },
};

export const NumberValidationCheck={
  validate:async(v)=>{
    return await new Promise(
      (resolve)=>{
        setTimeout(()=>{
            const num = parseFloat(v);

              if (isNaN(num)) {
                return resolve("Must be a valid number");
              }

              if (num < 1) {
                return resolve("Must be at least 1");
              }

              if (num > 3000) {
                return resolve("Cannot exceed 3000");
              }

              if (!Number.isInteger(num) || DangerousContentCheck.validate(v) !== true) {
                return resolve("Only whole numbers allowed");
              }

              resolve(true); //  Passed all checks
        },500)
      }
    )
  }
}

// return multiple error together 
export const PasswordValidationCheck={
   validate:{
      islength:async(v)=>{
        return await Promise((resolve)=>setTimeout(()=>{
            if(v.lenght<6){
              resolve("At least 6 character need");
            }else{
              resolve(true);
            }
        },500))
      },
      isuppercase:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[A-Z]/.test(v)){
              resolve("At least one uppercase letter need");
            }else{
              resolve(true);
            }
        },500))
      },
      isspacial:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[!@#$%^&*(),.?:{}|]/.test(v)){
              resolve("At least one special character need");
            }else{
              resolve(true);
            }
        },500))
      },
      isdigit:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[\d]/.test(v)){
              resolve("At least one digit need");
            }else{
              resolve(true);
            }
        },500))
      },
      isdangerous:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(DangerousContentCheck.validate(v) !== true){
              resolve("Dangerous content detected");
            }else{
              resolve(true);
            }
        },500))
      }
   }
}

export const EmailValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(v)|| DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid email format");
        }
        resolve(true);
      }, 300)
    );
  },
};
export const UrlValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        try {
          new URL(v);
          if (DangerousContentCheck.validate(v) !== true) {
            return resolve("Dangerous content detected");
          }
          resolve(true);
        } catch (e) {
          resolve("Invalid URL format");
        }
      }, 300)
    );
  },
};

export const PhoneValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const phonePattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
        if (!phonePattern.test(v) || DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid phone number format");
        }
        resolve(true);
      }, 300)
    );
  },
};
export const DateValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const date = new Date(v);
        if (isNaN(date.getTime()) || DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid date format");
        }
        resolve(true);
      }, 300)
    );
  },
};
export const TimeValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:mm format
        if (!timePattern.test(v) || DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid time format");
        }
        resolve(true);
      }, 300)
    );
  },
};
export const ColorValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const colorPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/; // Hex color format
        if (!colorPattern.test(v) || DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid color format");
        }
        resolve(true);
      }, 300)
    );
  },
};

