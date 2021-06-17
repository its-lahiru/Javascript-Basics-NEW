var button = document.querySelector('button');

// button.addEventListener('click', () => console.log(new Date().getMinutes() + ":" + new Date().getSeconds()));

Rx.Observable.fromEvent(button, 'click')
.throttleTime(1000)
    .subscribe(() => 
               console.log(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + ' time'));