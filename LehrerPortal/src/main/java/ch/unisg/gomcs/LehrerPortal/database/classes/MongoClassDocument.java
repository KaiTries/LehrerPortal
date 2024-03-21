package ch.unisg.gomcs.LehrerPortal.database.classes;


import ch.unisg.gomcs.LehrerPortal.database.MongoStudentDocument;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "classes")
public class MongoClassDocument {
    @Id
    private String klassenName;
    private List<MongoStudentDocument> students;


    public MongoClassDocument() {

    }


    public MongoClassDocument(String name) {
        this.klassenName = name;
        this.students = List.of();
    }

    public void addStudent(MongoStudentDocument student) {
        this.students.add(student);
    }

}

