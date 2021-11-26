import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Proveedor, ProveedorRelations, Empresa} from '../models';
import {EmpresaRepository} from './empresa.repository';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.Id,
  ProveedorRelations
> {

  public readonly empresa: BelongsToAccessor<Empresa, typeof Proveedor.prototype.Id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>,
  ) {
    super(Proveedor, dataSource);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
