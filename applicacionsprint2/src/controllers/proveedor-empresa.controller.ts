import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Proveedor,
  Empresa,
} from '../models';
import {ProveedorRepository} from '../repositories';

export class ProveedorEmpresaController {
  constructor(
    @repository(ProveedorRepository)
    public proveedorRepository: ProveedorRepository,
  ) { }

  @get('/proveedors/{id}/empresa', {
    responses: {
      '200': {
        description: 'Empresa belonging to Proveedor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async getEmpresa(
    @param.path.string('id') id: typeof Proveedor.prototype.Id,
  ): Promise<Empresa> {
    return this.proveedorRepository.empresa(id);
  }
}
