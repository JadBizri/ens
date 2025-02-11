import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';

@Injectable()
export class EnsService {
  constructor(private configService: ConfigService) {}

  private readonly url: string =
    'https://eth-mainnet.g.alchemy.com/v2/' +
    this.configService.get<string>('ALCHEMY_API_KEY');
  private provider = new ethers.JsonRpcProvider(this.url);

}
