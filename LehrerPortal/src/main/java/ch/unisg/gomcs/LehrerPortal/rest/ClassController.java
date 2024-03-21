package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.database.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.database.classes.ClassesService;
import ch.unisg.gomcs.LehrerPortal.database.classes.MongoClassDocument;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ClassController {


    @Autowired
    ClassesService classesService;


    @PostMapping("/classes")
    public String createClass(@RequestBody JsonNode name) {

        classesService.createClass(name.get("name").asText());

        return "Class created";
    }

    @PostMapping("/classes/{class}")
    public String addStudent(@RequestBody JsonNode name) {
        Optional<MongoClassDocument> classProb = classesService.getClas(name.get("name").asText());
         if (classProb.isEmpty()) {
             return "Class not found";
         }
        MongoClassDocument classActual = classProb.get();
        classActual.addStudent(new MongoStudentDocument(name.get("student").asText()));
        return "Student added";
    }

    @GetMapping("/classes")
    public String getClasses() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(classesService.findAll());
    }

    @GetMapping("/classes/{class}")
    public String getClass(@RequestBody JsonNode name) throws JsonProcessingException {
        Optional<MongoClassDocument> classProb = classesService.getClas(name.get("name").asText());
        if (classProb.isEmpty()) {
            return "Class not found";
        }
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(classProb.get());
    }
}
