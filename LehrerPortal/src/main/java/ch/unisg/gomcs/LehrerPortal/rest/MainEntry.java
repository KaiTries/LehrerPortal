package ch.unisg.gomcs.LehrerPortal.rest;


import ch.unisg.gomcs.LehrerPortal.database.MongoStudentDocument;
import ch.unisg.gomcs.LehrerPortal.database.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainEntry {

    @GetMapping("/")
    public String index() {
        return "index";
    }

}
