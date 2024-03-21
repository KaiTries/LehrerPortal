package ch.unisg.gomcs.LehrerPortal.domain.dto;

import lombok.Data;

import java.util.List;


@Data
public class PhotoUpload {

    private List<String> beschreibungen;


    public PhotoUpload() {
    }

    public String[] getLernziele() {
        return beschreibungen.toArray(new String[0]);
    }
}
