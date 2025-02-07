package com.example.audible.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="Audio")
public class Audio {
    @Id
    @Column(name = "audioID")
    private int audioId;

    @Column(name = "audiocastID")
    private int audiocastId;

    @Column(name = "languageID")
    private int languageId;

    @Column(name = "title")
    private String title;

    @Column(name = "releasedate")
    private Date releaseDate;

    @Column(name = "rating")
    private float rating;

    @Column(name = "audiofile")
    private byte[] audioFile;

    // Assuming the image is stored in assets/images directory and you store the image filename in imageUrl field
    @Column(name = "imageUrl")
    private String imageUrl;

    // Add a method to return the full URL of the image
    public String getFullImageUrl() {
        return "/assets/images/" + this.imageUrl;
    }
}
