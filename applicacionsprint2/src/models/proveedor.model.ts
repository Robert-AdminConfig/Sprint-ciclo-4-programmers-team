import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Empresa} from './empresa.model';

@model()
export class Proveedor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nit: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreProov: string;

  @property({
    type: 'string',
    required: true,
  })
  DireccionProov: string;

  @property({
    type: 'string',
    required: true,
  })
  TelefonoProov: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailProov: string;

  @property({
    type: 'string',
    required: true,
  })
  LegalRepresentative: string;

  @property({
    type: 'string',
    required: true,
  })
  SitioWeb: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  constructor(data?: Partial<Proveedor>) {
    super(data);
  }
}

export interface ProveedorRelations {
  // describe navigational properties here
}

export type ProveedorWithRelations = Proveedor & ProveedorRelations;
