package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoLernzielDocument;
import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.domain.services.ClassesService;
import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoClassDocument;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ClassRestController {


    @Autowired
    ClassesService classesService;


    /**
     * Create a class
     * @param name
     * @return
     */
    @PostMapping("/classes")
    public String createClass(@RequestBody JsonNode name) {

        classesService.createClass(name.get("name").asText());

        return "Class created";
    }

    /**
     * Add a student to a class
     * @param klasse
     * @return
     */
    @PostMapping("/classes/{klasse}")
    public String addStudent(@RequestBody JsonNode student, @PathVariable String klasse) {
        Optional<MongoClassDocument> classProb = classesService.getClas(klasse);
         if (classProb.isEmpty()) {
             return "Class not found";
         }
        MongoClassDocument classActual = classProb.get();
        classActual.addStudent(new MongoStudentDocument(student.get("name").asText(),student.get("dateOfBirth").asText()));
        classesService.save(classActual);
        return "Student added";
    }

    @PostMapping("classes/{klasse}/{student}")
    public String addLernziel(@RequestBody MongoLernzielDocument lernziel, @PathVariable String klasse, @PathVariable String student) {
        Optional<MongoClassDocument> classProb = classesService.getClas(klasse);
        if (classProb.isEmpty()) {
            return "Class not found";
        }
        MongoClassDocument classActual = classProb.get();
        Optional<MongoStudentDocument> studentProb = classActual.getStudent(student);
        if (studentProb.isEmpty()) {
            return "Student not found";
        }
        studentProb.get().addLernziel(lernziel);
        classesService.save(classActual);
        return "Lernziel added";
    }




    /**
     * Get all classes
     * @return
     * @throws JsonProcessingException
     */
    @GetMapping("/classes")
    public String getClasses() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(classesService.findAll());
    }
}
