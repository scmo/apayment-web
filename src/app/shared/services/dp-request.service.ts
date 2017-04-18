import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DPRequest} from '../models/dp-request.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class DPRequestService {

    private dpRequestsURL = '/request'; // URL to web api
    constructor(private http: Http, private authHttp: AuthHttp) {
    }


    create(dpRequest: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL;
        return this.authHttp.post(url, dpRequest).map((response: Response) => response.json());
    }
}
