package ch.unisg.gomcs.LehrerPortal.domain.dto;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "students")
public class MongoStudentDocument {
    @Id
    private String name;
    private String dateOfBirth;
    private List<MongoLernzielDocument> lernziele;

    public MongoStudentDocument(String name, String dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.lernziele = List.of();
    }

    public MongoStudentDocument(String name, String dateOfBirth ,MongoLernzielDocument lernziel) {
        this.name = name;
        this.lernziele = List.of(lernziel);
        this.dateOfBirth = dateOfBirth;
    }

    public MongoStudentDocument() {
    }

    public void addLernziel(MongoLernzielDocument lernziel) {
        this.lernziele.add(lernziel);
    }


    public List<MongoLernzielDocument> getLernziele(int subject) {
        return lernziele.stream().filter(lernziel -> lernziel.getF_id() == subject).toList();
    }

    public void updateLernziel(String uid, String bewertung){
        for (MongoLernzielDocument lernziel : lernziele) {
            if (lernziel.getUid().equals(uid)) {
                lernziel.setBewertung(bewertung);
            }
        }
    }
}
