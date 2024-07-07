self.onmessage = function(e) {
    const { type, input, delay } = e.data;
    let interval;
    
    if (type === 'arrival') {
        interval = setInterval(() => {
            const arrivalTime = self.relativeTimeElement.textContent.slice(-8);
            if (arrivalTime >= input) {
                setTimeout(() => { self.troopSubmitButton.click(); }, delay);
                clearInterval(interval);
            }
        }, 1);
    } else if (type === 'send') {
        interval = setInterval(() => {
            const serverTime = self.serverTimeElement.textContent;
            if (serverTime >= input) {
                setTimeout(() => { self.troopSubmitButton.click(); }, delay);
                clearInterval(interval);
            }
        }, 1);
    }
};

self.relativeTimeElement = null;
self.serverTimeElement = null;
self.troopSubmitButton = null;

self.onmessage = function(event) {
    if (event.data.type === "init") {
        self.relativeTimeElement = event.data.relativeTimeElement;
        self.serverTimeElement = event.data.serverTimeElement;
        self.troopSubmitButton = event.data.troopSubmitButton;
    }
};
