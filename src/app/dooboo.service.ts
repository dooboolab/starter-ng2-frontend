import { Headers, RequestOptions } from '@angular/http';
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DoobooService {

  private leftMailUrl = "/api/dooboo/left_email";

  constructor (private http: Http) { }

  leftMaliUrl(email: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.leftMailUrl, { email }, options)
                    .map(res => res)  // json으로 안보내고 string으로 보내면 res.json을 해줘야한다.
  }

}

