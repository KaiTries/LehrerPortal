package ch.unisg.gomcs.LehrerPortal.rest;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainEntry {

    @GetMapping("/")
    public String index() {
        return "index";
    }

}
