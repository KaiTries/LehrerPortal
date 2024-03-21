package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoClassDocument;
import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.domain.services.ClassesService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@Controller
public class ClassWebController {


    @Autowired
    ClassesService classesService;

    /**
     * get a class
     * @return
     * @throws JsonProcessingException
     */
    @GetMapping("/classes/{className}")
    public String getClass(@PathVariable String className, Model model) throws JsonProcessingException {
        Optional<MongoClassDocument> classProb = classesService.getClas(className);
        if (classProb.isEmpty()) {
            return "Class not found";
        }
        MongoClassDocument classActual = classProb.get();
        List<MongoStudentDocument> students = classActual.getStudents();


        model.addAttribute("className", className);
        model.addAttribute("students", students);

        return "class-template"; // Refers to class-template.html
    }

   // TODO: Site for a student dynamically loaded from students db
    @GetMapping("/classes/{klasse}/{student}")
    public String getStudent(@PathVariable String klasse, @PathVariable String student, Model model) throws JsonProcessingException {
        Optional<MongoClassDocument> classProb = classesService.getClas(klasse);
        if (classProb.isEmpty()) {
            return "Class not found";
        }
        MongoClassDocument classActual = classProb.get();
        Optional<MongoStudentDocument> studentProb = classActual.getStudent(student);
        if (studentProb.isEmpty()) {
            return "Student not found";
        }

        MongoStudentDocument studentActual = studentProb.get();
        System.out.println(studentActual.getLernziele(0));
        model.addAttribute("student", studentActual);



        return "student";
    }
}
