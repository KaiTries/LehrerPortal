package ch.unisg.gomcs.LehrerPortal.domain.dto;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Optional;

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

    public Optional<MongoStudentDocument> getStudent(String name) {
        return students.stream().filter(student -> student.getName().equals(name)).findFirst();
    }

}

