import { Component, Input, Output, EventEmitter } from '@angular/core'; 


@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>{{ event.time }}</div>
        <div>\${{ event.price }}</div>
        <div>
            <span>Location: {{ event.location.address }}</span>
            <span>&nbsp;</span>
            <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">
        Click Me!</button>
    </div>
    ` 
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClickThumbnail = new EventEmitter();

    handleClickMe()
    {
        //console.log('clicked!');
        this.eventClickThumbnail.emit(this.event.name);
    }

}