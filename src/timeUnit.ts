/**
 * USAGE
 * 
 * //convert Date to seconds (since epoc)
 * TimeUnit.toSeconds( Date.now(), TimeUnit.MILLIS )
 * 
 * TimeUnit.HOURS.toSeconds( 1 ) -> 3600
 * 
 * TimeUnit.toSeconds(3600,TimeUnit.HOURS) -> 1
 * 
 * new Date(TimeUnit.SECONDS.toMillis(seconds))
 */

//https://github.com/rideg/TimeUnit.js/blob/master/src/TimeUnit.js

//https://timestamp.online/


interface TimeUnitInst <T> {
    toMillis: (value:T)=>number
    toSeconds: (value:T)=>number
    toMinutes: (value:T)=>number
    toHours: (value:T)=>number
    toDays: (value:T)=>number
}


export const TimeUnit = (function() {
    'use strict';
    const floor = Math.floor;
    return {
        toMillis: function<T>(value:T,unit:TimeUnitInst<T>):number {
            return unit.toMillis(value);
        },
        toSeconds: function<T>(value:T,unit:TimeUnitInst<T>):number {
            return unit.toSeconds(value);
        },
        toMinutes: function<T>(value:T,unit:TimeUnitInst<T>):number {
            return unit.toMinutes(value);
        },
        toHours: function<T>(value:T,unit:TimeUnitInst<T>):number {
            return unit.toHours(value);
        },
        toDays: function<T>(value:T,unit:TimeUnitInst<T>):number {
            return unit.toDays(value);
        },
        MILLIS: {
            toMillis: function(value:number):number {
                return value;
            },
            toSeconds: function(value:number):number {
                return floor(value / 1000);
            },
            toMinutes: function(value:number):number {
                return floor(value / (60 * 1000));
            },
            toHours: function(value:number):number {
                return floor(value / (60 * 60 * 1000));
            },
            toDays: function(value:number):number {
                return floor(value / (60 * 60 * 24 * 1000));
            }
        } as TimeUnitInst<number>,
        SECONDS: {
            toMillis: function(value:number):number {
                return value * 1000;
            },
            toSeconds: function(value:number):number {
                return value;
            },
            toMinutes: function(value:number):number {
                return floor(value / 60);
            },
            toHours: function(value:number):number {
                return floor(value / (60 * 60));
            },
            toDays: function(value:number):number {
                return floor(value / (60 * 60 * 24));
            }
        } as TimeUnitInst<number>,
        MINUTES: {
            toMillis: function(value:number):number {
                return value * 1000 * 60;
            },
            toSeconds: function(value:number):number {
                return value * 60;
            },
            toMinutes: function(value:number):number {
                return value;
            },
            toHours: function(value:number):number {
                return floor(value / 60);
            },
            toDays: function(value:number):number {
                return floor(value / (60 * 24));
            }
        } as TimeUnitInst<number>,
        HOURS: {
            toMillis: function(value:number):number {
                return value * 60 * 60 * 1000;
            },
            toSeconds: function(value:number):number {
                return value * 60 * 60;
            },
            toMinutes: function(value:number):number {
                return value * 60;
            },
            toHours: function(value:number):number {
                return value;
            },
            toDays: function(value:number):number {
                return floor(value / 24);
            }
        } as TimeUnitInst<number>,
        DAYS: {
            toMillis: function(value:number):number {
                return value * 60 * 60 * 1000 * 24;
            },
            toSeconds: function(value:number):number {
                return value * 60 * 60 * 24;
            },
            toMinutes: function(value:number):number {
                return value * 60 * 24;
            },
            toHours: function(value:number):number {
                return value * 24;
            },
            toDays: function(value:number):number {
                return value;
            }
        } as TimeUnitInst<number>
    };
})();
