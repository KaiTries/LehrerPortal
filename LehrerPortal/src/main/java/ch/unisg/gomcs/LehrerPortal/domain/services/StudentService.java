package ch.unisg.gomcs.LehrerPortal.domain.services;


import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoStudentDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public Optional<MongoStudentDocument> findById(String id) {
        return studentRepository.findById(id);
    }

    public List<MongoStudentDocument> findAll() {
        return studentRepository.findAll();
    }

    public MongoStudentDocument save(MongoStudentDocument student) {
        return studentRepository.save(student);
    }

    public void deleteById(String id) {
        studentRepository.deleteById(id);
    }
}
