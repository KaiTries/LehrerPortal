package ch.unisg.gomcs.LehrerPortal.database;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "students")
public class MongoStudentDocument {
    @Id
    private String id;

    private String firstName;
    private String lastName;

    public MongoStudentDocument(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
