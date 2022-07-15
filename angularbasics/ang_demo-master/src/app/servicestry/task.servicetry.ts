import { Injectable } from "@angular/core";

//compiler generates necessary metadata to create dependencies of a class when class is injected
@Injectable({
//determines which injector will provide the injectable
//root is app level injector
    providedIn:"root"
})

export class TaskService{

    constructor() { }
}