import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Empresa, MensajeEmpleado} from '../models';
import {EmpresaRepository} from './empresa.repository';
import {MensajeEmpleadoRepository} from './mensaje-empleado.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {

  public readonly empresa: BelongsToAccessor<Empresa, typeof Empleado.prototype.id>;

  public readonly mensajeEmpleados: HasManyRepositoryFactory<MensajeEmpleado, typeof Empleado.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('MensajeEmpleadoRepository') protected mensajeEmpleadoRepositoryGetter: Getter<MensajeEmpleadoRepository>,
  ) {
    super(Empleado, dataSource);
    this.mensajeEmpleados = this.createHasManyRepositoryFactoryFor('mensajeEmpleados', mensajeEmpleadoRepositoryGetter,);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
