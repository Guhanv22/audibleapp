package com.example.audible.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "HISTORY")
public class
History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "HISTORYID")
    private int historyid;

    // Corrected JoinColumn reference
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USERID", referencedColumnName = "ID")  // Match with User's ID
    private User user;  // Assuming you have a User entity

    @Column(name = "AUDIOBOOKID")
    private int audiobookid;

    @Column(name = "PODCASTID")
    private int podcastid;

    @Column(name = "LASTLISTENED")
    private Date lastlistened;
}
