package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.database.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.database.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/students")
    public String createStudent() {
        studentService.save(new MongoStudentDocument("John", "Doe"));
        return "Student created";
    }

    @GetMapping("/students")
    public String getStudent() {
        return studentService.findAll().toString();
    }

}
