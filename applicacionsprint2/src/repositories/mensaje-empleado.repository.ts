import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {MensajeEmpleado, MensajeEmpleadoRelations, Empleado} from '../models';
import {EmpleadoRepository} from './empleado.repository';

export class MensajeEmpleadoRepository extends DefaultCrudRepository<
  MensajeEmpleado,
  typeof MensajeEmpleado.prototype.id,
  MensajeEmpleadoRelations
> {

  public readonly empleado: BelongsToAccessor<Empleado, typeof MensajeEmpleado.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>,
  ) {
    super(MensajeEmpleado, dataSource);
    this.empleado = this.createBelongsToAccessorFor('empleado', empleadoRepositoryGetter,);
  }
}
