package ch.unisg.gomcs.LehrerPortal.database;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends MongoRepository<MongoStudentDocument, String> {
    Optional<MongoStudentDocument> findById(String firstName);
    List<MongoStudentDocument> findAll();

}
