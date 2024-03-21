package ch.unisg.gomcs.LehrerPortal.database;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "students")
public class MongoStudentDocument {
    @Id
    private String name;
    private List<MongoLernzielDocument> lernziele;

    public MongoStudentDocument(String name) {
        this.name = name;
        this.lernziele = List.of();
    }

    public MongoStudentDocument(String name, MongoLernzielDocument lernziel) {
        this.name = name;
        this.lernziele = List.of(lernziel);
    }

    public MongoStudentDocument() {
    }

    public void addLernziel(MongoLernzielDocument lernziel) {
        this.lernziele.add(lernziel);
    }
}
