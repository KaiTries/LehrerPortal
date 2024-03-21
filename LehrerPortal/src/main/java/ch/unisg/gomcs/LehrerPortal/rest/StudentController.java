package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoLernzielDocument;
import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.domain.services.StudentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/students")
    public String createStudent(@RequestBody JsonNode student) {
        // map the name string to a JsonNode object
        // then extract the name from the JsonNode object
        studentService.save(new MongoStudentDocument(student.get("name").asText(),student.get("dateOfBirth").asText()));
        return "Student created";
    }

    @GetMapping("/students")
    public String getStudent() {
        return studentService.findAll().toString();
    }

    @GetMapping("/students/{student}")
    public String getStudent(@PathVariable String student) throws JsonProcessingException {
        Optional<MongoStudentDocument> studentFound = studentService.findById(student);
        if (studentFound.isEmpty()) {
            return "Student not found";
        }
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(studentFound.get());
    }

    @PostMapping("/students/{student}")
    public String createLernziel(@PathVariable String student, @RequestBody MongoLernzielDocument lernziel) {
        Optional<MongoStudentDocument> studentDoc = studentService.findById(student);
        if (studentDoc.isEmpty()) {
            return "Student not found";
        }
        MongoStudentDocument studentActual = studentDoc.get();
        studentActual.addLernziel(lernziel);

        // Assuming id and name are properties of MongoLernzielDocument
        // and that you have a constructor or setters in MongoStudentDocument to handle these
        studentService.save(studentActual);
        return "Lernziel created";
    }


}
