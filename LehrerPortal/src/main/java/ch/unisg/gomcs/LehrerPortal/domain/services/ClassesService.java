package ch.unisg.gomcs.LehrerPortal.domain.services;

import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoClassDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassesService {

    @Autowired
    ClassesRepository classesRepository;


    public void createClass(String name) {
        classesRepository.save(new MongoClassDocument(name));
    }

    public Optional<MongoClassDocument> getClas(String name) {
        return classesRepository.findById(name);
    }

    public List<MongoClassDocument> findAll() {
        return classesRepository.findAll();
    }

    public MongoClassDocument save(MongoClassDocument klass) {
        return classesRepository.save(klass);
    }

}
