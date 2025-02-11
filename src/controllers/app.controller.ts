import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../core/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Return registration details of an ENS name
  @Get("/ens/:name/details")
  getRegistration(@Param('name') name: string) {
    
  }

  //Fetch metadata changes over time
  @Get('/ens/:name/metadata')
  getMetadata(@Param('name') name: string) {

  }

  // Retrieve the transfer history of an ENS name
  @Get('/ens/:name/history')
  getTransferHistory(@Param('name') name: string) {

  }

  // List all ENS names owned by a specific address
  @Get('/ens/owned/:address')
  getEnsNames(@Param('address') address: string) {
    
  }
}
