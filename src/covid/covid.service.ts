import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {firstValueFrom} from "rxjs";
import {UsDaily} from "./us-daily.intervace";

@Injectable()
export class CovidService {

    constructor(
        private readonly http: HttpService
    ) {
    }

    async getDaily(): Promise<UsDaily> {
        const url = 'https://api.covidtracking.com/v2/us/daily.json';
        const {data} = await firstValueFrom(this.http.get(url));
        return data;
    }
}
