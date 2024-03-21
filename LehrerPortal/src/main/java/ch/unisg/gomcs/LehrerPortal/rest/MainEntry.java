package ch.unisg.gomcs.LehrerPortal.rest;


import org.springframework.ui.Model;
import ch.unisg.gomcs.LehrerPortal.domain.dto.MongoClassDocument;
import ch.unisg.gomcs.LehrerPortal.domain.services.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class MainEntry {

    @Autowired
    ClassesService classesService;

    @GetMapping("/")
    public String index(Model model) {
        List<MongoClassDocument> classes = classesService.findAll();

        model.addAttribute("classes", classes);

        return "index";
    }

}
