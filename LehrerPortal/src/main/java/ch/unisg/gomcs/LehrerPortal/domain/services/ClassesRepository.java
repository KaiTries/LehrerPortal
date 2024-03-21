package ch.unisg.gomcs.LehrerPortal.domain.services;

import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoClassDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassesRepository extends MongoRepository<MongoClassDocument, String> {


}
