package ch.unisg.gomcs.LehrerPortal.database.classes;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassesRepository extends MongoRepository<MongoClassDocument, String> {


}
